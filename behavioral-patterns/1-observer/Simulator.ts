import { SocialMediaAccount } from "./SocialMediaAccount";
import { Observer } from "./Observer";

const SomeoneNotable = new SocialMediaAccount();

const Follower1 = new Observer("Follower1");
const Follower2 = new Observer("Follower2");

SomeoneNotable.subscribe(Follower1);
SomeoneNotable.subscribe(Follower2);

SomeoneNotable.notify("I am a notable person posting on my social media account");

Follower1.showFeed();
Follower2.showFeed();

SomeoneNotable.unsubscribe(Follower1);

SomeoneNotable.notify("I am a notable person posting on my social media account again");

Follower1.showFeed();
Follower2.showFeed();