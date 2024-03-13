import type { Person } from '../components/PersonInfo.svelte';
import type { MonthlyPostsData } from '../components/MonthlyPosts.svelte';
import type { RoleChangePostData } from '../components/RoleChangePost.svelte';

export enum FeedType {
	MonthlyPosts = 'MonthlyPosts',
	RoleChange = 'RoleChange'
}

export interface MonthlyPostsFeed {
	type: FeedType.MonthlyPosts;
	monthlyPosts: MonthlyPostsData;
}

export interface roleChangePostFeed {
	type: FeedType.RoleChange;
	roleChangePost: RoleChangePostData;
}

export type Feed = MonthlyPostsFeed | roleChangePostFeed;

export const person: Person = {
	name: 'Krishna Kiran',
	imgUrl: 'assets/krishna-kiran-photo.jpeg',
	about:
		'Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of ' +
		'Engineering. I write hot-takes on building a business, shipping delightful products and ' +
		'accelerating product and career growth.',

	company: 'Duggup',
	position: 'Co-Founder and CEO'
};

export const feeds: Feed[] = [
	{
		type: FeedType.MonthlyPosts,
		monthlyPosts: {
			month: 'Dec 2023',
			posts: [
				{
					imgUrl: 'assets/steve-jobs.jpeg',
					content: 'No amount of technology can convert a bad story into a good story.'
				},
				{
					imgUrl: 'assets/sam-altman.jpeg',
					content: "Most people don't have original ideas. Here is how Sam Altman pushes..."
				}
			]
		}
	},
	{
		type: FeedType.RoleChange,
		roleChangePost: {
			company: {
				name: 'Duggup',
				logoUrl: 'assets/duggle-logo.png'
			},
			joining: {
				location: 'San Francisco Bay Area',
				month: 'Nov 2023',
				role: 'Co-Founder and CEO',
				roleLabels: ['Full-time', 'Remote']
			}
		}
	},
	{
		type: FeedType.MonthlyPosts,
		monthlyPosts: {
			month: 'Dec 2023',
			posts: [
				{
					imgUrl: 'assets/desktop.jpeg',
					content: 'Startup Lesson I am reflecting. Don\'t build for the "average person".'
				},
				{
					imgUrl: 'assets/map.png',
					content: 'Your biggest regrets at 80 will be acts of omission.'
				}
			]
		}
	},
	{
		type: FeedType.RoleChange,
		roleChangePost: {
			company: {
				name: 'BetterUp',
				logoUrl: 'assets/betterup-logo.jpeg'
			},
			joining: {
				location: 'San Francisco Bay Area',
				month: 'Nov 2023',
				role: 'VP Engineering',
				roleLabels: ['Full-time']
			}
		}
	}
];
