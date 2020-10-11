import { Component, OnInit, ViewChild, ElementRef, NgZone ,AfterViewInit} from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { CustomerAuthService } from 'src/app/webportal/services/customer-auth.service';
import { Customer } from 'src/app/webportal/pojo/customer';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  title: string = 'Location';
  latitude: number;
  longitude : number;
  zoom: number;
  address : string;
  private geoCoder;
  user = new Customer();
  customer = new Customer();
  successMsg: any;
  errorMsg: any;

  @ViewChild('search', {static:true}) 
  public searchElementRef: ElementRef;

  @ViewChild('mapRef', {static: true }) mapElement: ElementRef;
  email: string;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,private authService: CustomerAuthService,) { }

  ngOnInit() {

    this.email = this.authService.getAuthenticatedCustomer();
    this.user = new Customer();
    this.authService.getCustomer(this.email).subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });


    this.mapsAPILoader.load().then(()=>{
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", ()=>{
          this.ngZone.run(()=>{
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if(place.geometry === undefined || place.geometry === null){
              return;
            }

            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
    });
    
  }
  private setCurrentLocation(){
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude,this.longitude);
      });
    }
  }

  markerDragEnd($event:any){
    console.log($event);
    this.latitude=$event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude,this.longitude);
  }

  getAddress(latitude,longitude){
    this.geoCoder.geocode({'location' : {lat: latitude,lng:longitude}},(results,status)=>{
        console.log(results);
        console.log(status);
        if(status==='OK'){
            if(results[0]){
              this.zoom=12;
              this.address = results[0].formatted_address;
            }else{
              window.alert('No results found');
            }
        }else{
          window.alert('Geocoder failed due to: '+status);
        }
    });

  }


  loadMap = () => {
    var map = new window['google'].maps.Map(this.mapElement.nativeElement, {
      center: {lat: 24.5373, lng: 81.3042},
      zoom: 8
    });

    var marker = new window['google'].maps.Marker({
      position: {lat: 24.5373, lng: 81.3042},
      map: map,
      title: 'Hello World!',
      draggable: true,
      animation: window['google'].maps.Animation.DROP,
    });

    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h3 id="thirdHeading" class="thirdHeading">W3path.com</h3>'+
    '<div id="bodyContent">'+
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'+
    '</div>'+
    '</div>';

    var infowindow = new window['google'].maps.InfoWindow({
      content: contentString
    });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

  }

  renderMap() {

    window['initMap'] = () => {
      this.loadMap();     
    }
    if(!window.document.getElementById('google-map-script')) {
      var s = window.document.createElement("script");
      s.id = "google-map-script";
      s.type = "text/javascript";
      s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCjX18JKeMwwJLdWueKkhJnY7ND-IeE-Kk;callback=initMap";

      window.document.body.appendChild(s);
    } else {
      this.loadMap();
    }
  }

  onSubmit(){
    console.log(this.user);
    this.authService.updateCustomerProfile(this.user.id,this.user).subscribe(
      (data) => {
        // this.user = data;
        this.successMsg = `${this.user.email} was updated successfully !`;
        alert(this.successMsg);
        location.reload();
      },
      (error) => {
        this.errorMsg = 'Something went Wrong !!!';
        console.log(error);
      }
    );
  }
}
