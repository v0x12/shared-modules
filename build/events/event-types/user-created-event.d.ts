import { Subjects } from "../subjects";
export interface UserCreatedEvent {
    Subject: Subjects.USER_CREATED;
    data: {
        email: string;
        userName: string;
        firstName: string;
        lastName: string;
        avatarUrl: string;
    };
}
