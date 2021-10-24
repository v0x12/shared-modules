import { Subjects } from "../subjects";

export interface UserCreatedEvent {
  Subjects: Subjects.USER_CREATED;
  data: {
    id: string;
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
  };
}
