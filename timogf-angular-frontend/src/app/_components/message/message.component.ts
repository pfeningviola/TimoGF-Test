import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() isValidData: boolean;
  @Input() submittedName: string;
  @Input() submittedText: string;
  @Input() choosenColor: string;

  constructor() { }

  ngOnInit() {
  }
}
