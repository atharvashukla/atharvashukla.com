# How is this site deployed?

- I host using [Hostinger](https://www.hostinger.com/)
- I push the changes to my personal website [repo](https://github.com/atharvashukla/atharvashukla) on Github
- I use [Webhooks](https://developer.github.com/webhooks/) to connect Hostinger and Github

I simply write in a markdown file and the deploy script converts that to html and links it onto the front page. 
The title of the post becomes the title of the link and the filename becomes the path. 

I use Alfred's Hotkey workflow to add a keybinding  (<span style="font-size: 1.1em">⌃⌥⌘D</span>) to run the Makefile that compiles and deploys. 