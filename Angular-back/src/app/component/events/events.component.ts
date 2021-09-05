import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EventService} from "../../services/event.service";
import {Event} from "../../models/event.model";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnChanges {

  events : Event[] = []

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.load()
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.load()
  }

  private load() {
    this.eventService.getAllEvent().subscribe(p => this.events = p);
    console.log(this.events);
  }

  update(event: Event) {
    //TODO: Implement Update Event
  }

  delete(event: Event) {
    //TODO: Implement Delete Event
  }
}
