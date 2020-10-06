import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

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

  @ViewChild('search', {static:true}) 
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
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

  markerDragEnd($event:MouseEvent){
    console.log($event);
    // this.latitude=$event.coords.lat;
    // this.longitude = $event.coords.lng;
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
}
