import { Subjects } from "../subjects";

export interface PostCreatedEvent {
  Subjects: Subjects.POST_CREATED;
  data: {
    id: string;
    userId: string;
  };
}
