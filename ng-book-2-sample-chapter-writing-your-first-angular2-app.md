


To create a new component using Angular CLI, we'll use the generate command.
To generate the hello-world component, we need to run the following command:
###$ ng generate component hello-world

**So how do we actually define a new Component?**

*A basic Component has two parts:*
1. A component decorator
2. A component definition class

*These are called decorators:*
1. @Component({
2.   // ...
3. })

When we add an attribute in brackets like [foo] we٧re saying we want to pass a value to the input
named foo on that component.
1. <ul>
2.   <li *ngFor="let name of names">
3.     <app-user-item [name]="name"></app-user-item>
4.   </li>
5. </ul>

Notice that in the input tags we used the # (hash) to tell Angular to assign those tags to a local
variable. By adding the #newtitle and #newlink to the appropriate <input /> elements, we can
pass them as variables into the addArticle() function on the button!

Notice in our first input tag we have the following: 
1. <input name="title" #newtitle>
This markup tells Angular to bind this to the variable newtitle. 
The #newtitle syntax is called a resolve. 
The effect is that this makes the variable newtitle available to the expressions within this view.

JavaScript, by default, propagates the click event to all the parent components. 
Because the click event is propagated to parents, 
our browser is trying to follow the empty link, 
which tells the browser to reload.
To fix that, we need to make the click event handler to return false.
This will ensure the browser won’t try to refresh the page.
1. voteDown(): boolean {
2.   this.votes -= 1;
3.   return false;
4. }
5. // and similarly with `voteUp()`

Remember, we can pass a variable in an element by surrounding it in square brackets
[variableName], like so:
1. <app-article [article]="myArticle"></app-article>

## Much of writing Angular apps is just this:
1. Split your app into components
2. Create the views
3. Define your models
4. Display your models
5. Add interaction


