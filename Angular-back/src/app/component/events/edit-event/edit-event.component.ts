import {Component, Input, OnInit} from '@angular/core';
import { Event} from "../../../models/event.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {EventService} from "../../../services/event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  event! : Event;
  eventToUpdate! : Event ;
  selectedType!: string;

  updateEventForm! : FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private eventService: EventService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.event);

    this.eventService.getEventById(this.activatedRoute.snapshot.paramMap.get("id")!).subscribe( result => {this.eventToUpdate = result;
      this.selectedType = result.eventType!});

    this.updateEventForm = this.fb.group({
      title: [this.event.title, [Validators.required]],
      description: [this.event.description, [Validators.required]],
      startDate: [this.event.startDate, [Validators.required]],
      endDate: [this.event.endDate, [Validators.required]],
      eventType: [this.event.eventType, [Validators.required]],
      maxParticipant: [this.event.maxParticipant, ],
      minParticipant: [this.event.minParticipant, ],
      image: ["ffeff", []],
      address: [this.event.address, [Validators.required]],
      zip: [this.event.zip, [Validators.required]],
      city: [this.event.city, [Validators.required]],
    });
  }

  onSubmit(): void {
    let event = (this.updateEventForm.value as Event);
    this.eventService.updateEvent(this.eventToUpdate.id!, event).subscribe();

  }
}
