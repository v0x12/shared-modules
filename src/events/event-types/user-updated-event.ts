import { Subjects } from "../subjects";
// Version added for handle concurrency issues
export interface UserUpdatedEvent {
  Subjects: Subjects.USER_UPDATED;
  data: {
    id: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    version: number;
  };
}
