import { Subjects } from "../subjects";
export interface UserUpdatedEvent {
    Subjects: Subjects.USER_UPDATED;
    data: {
        email: string;
        username: string;
        firstName: string;
        lastName: string;
        avatarUrl: string;
    };
}
