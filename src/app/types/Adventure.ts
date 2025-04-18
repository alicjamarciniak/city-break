import { type Document } from '@contentful/rich-text-types';

export type Instructor = {
  fields: {
    avatarAlt: string;
    fallback: string;
    firstName: string;
    lastName: string;
    helloMessage: string;
    avatar: {
      fields: {
        file: { url: string };
      };
    };
  };
};

export type WeekDay =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export type ParticipantsGroup = {
  fields: {
    groupName: string;
    startDate: string;
    endDate: string;
    weekDays?: WeekDay[];
  };
};

export type Adventure = {
  id: string;
  name: string;
  shortDescription: string;
  region: string;
  city: string;
  address: string;
  facilityName: string;
  images: {
    fields: {
      title: string;
      file: { url: string };
    };
  }[];
  fullDescription: Document;
  variant: 'range' | 'regular' | 'one-off';
  instructor: Instructor[];
  participantsGroups: ParticipantsGroup[];
};
