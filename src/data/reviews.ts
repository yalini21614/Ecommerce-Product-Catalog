import { Review } from '../types';

export const INITIAL_REVIEWS: Record<string, Review[]> = {
  'prod-1': [
    {
      id: 'rev-1',
      userName: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80',
      rating: 5,
      comment: 'The noise cancellation on flights is an absolute lifesaver. Deep, balanced bass without feeling muddy.',
      date: '2024-02-12'
    },
    {
      id: 'rev-2',
      userName: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&q=80',
      rating: 5,
      comment: 'Battery lasts for days of coding sessions. Very comfortable even with glasses on.',
      date: '2024-02-19'
    }
  ],
  'prod-2': [
    {
      id: 'rev-3',
      userName: 'Marcus Sterling',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
      rating: 5,
      comment: 'The titanium build feels super premium. Health sensors match my clinical pulse oximeter.',
      date: '2024-02-25'
    }
  ]
};
