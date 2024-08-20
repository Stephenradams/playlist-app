# PlaylistApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.


### Comments/thoughts

This test gives a lot of space to come up with ideas for how to structure an Angular app and what features you can add. It would have been easy to make a API request and display the list of playlists on a page, this could be done with one component, but really the test is to show what you can do with a source of data. 

What I've aimed to do in this example code is create an app that loads the Playlist data and have some features that a 'user' may want, including searching, viewing the full details of a playlist and being able to open the playlist in Apple Music. 

So I found that this test gave scope to think about what can be done with this data.

### Technical Comments

I've built this app to using NgRx's Signal Store approach instead of the usual actions, reducers, effects structure (which I have used on several projects). I chose to use the Signal Store approach as it shows how NgRx based applications can now start to use the new features of Angular (Signals), which might be the direction NgRx goes in the future. 

### Challenges/Successes

The challenges I found was working with the Signal Store, especially the methods of the store and how, currently, the NgRx dev tools do not support the Signal Store approach, so seeing what is currently in the store at any time is not as straight forward as the NgRx non-signal store approach. But a new method added to the Store that logs out all the current values is one way of getting around this issue.

The successes, I thought the structure I set out was intuitive and it was good to make use of Angular Material again, which I haven't used recently. 
