import {Event} from "./event.model";
import {Discussion} from "./discussion.model";
import {User} from "./user.model";

export class DiscussionMessage {
  id?: string;
  content? : string;
  date?: Date;
  user? : User;
  discussion? : Discussion;

  constructor(id: string, content: string, date: Date, user: User, discussion: Discussion) {
    this.id = id;
    this.content = content;
    this.date = date;
    this.user = user;
    this.discussion = discussion;
  }
}
