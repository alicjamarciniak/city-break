import { Adventure } from '@/app/types/Adventure';
import { Document } from '@contentful/rich-text-types'; // If using Contentful

export const mockAdventures: Adventure[] = [
  {
    id: '1',
    name: 'Mountain Hike',
    shortDescription: 'Explore the mountains like never before',
    region: 'Alps',
    city: 'Zermatt',
    address: 'Matterhorn Trail 1',
    facilityName: 'Alpine Base Camp',
    variant: 'regular',
    images: [
      {
        fields: {
          title: 'Mountain View',
          file: { url: '/img/mountain.jpg' },
        },
      },
    ],
    fullDescription: {
      nodeType: 'document',
      data: {},
      content: [],
    } as Document,
    instructor: [
      {
        fields: {
          firstName: 'Mira',
          lastName: 'Kowalska',
          avatarAlt: 'Mira Avatar',
          helloMessage: 'Hi there!',
          fallback: 'MK',
          avatar: {
            fields: {
              file: {
                url: '//test.org/img/avatar-mira.jpg',
              },
            },
          },
        },
      },
    ],
    participantsGroups: [
      {
        fields: {
          groupName: 'Weekend Hikers',
          startDate: '2025-05-10',
          endDate: '2025-05-12',
          weekDays: ['Saturday', 'Sunday'],
        },
      },
    ],
  },
  {
    id: '2',
    name: 'Beach Dive',
    shortDescription: 'Swim with dolphins',
    region: 'Alps',
    city: 'Zermatt',
    address: 'Matterhorn Trail 1',
    facilityName: 'Alpine Base Camp',
    variant: 'regular',
    images: [
      {
        fields: {
          title: 'Beach',
          file: { url: '/img/beach.jpg' },
        },
      },
    ],
    fullDescription: {
      nodeType: 'document',
      data: {},
      content: [],
    } as Document,
    instructor: [
      {
        fields: {
          firstName: 'Anna',
          lastName: 'Horn',
          avatarAlt: 'Anna Horn',
          helloMessage: 'Hi there!',
          fallback: 'AH',
          avatar: {
            fields: {
              file: {
                url: '//test.org/img/anna-horn.jpg',
              },
            },
          },
        },
      },
    ],
    participantsGroups: [
      {
        fields: {
          groupName: 'Weekend Divers',
          startDate: '2025-07-10',
          endDate: '2025-07-12',
          weekDays: ['Saturday', 'Sunday'],
        },
      },
    ],
  },
];
