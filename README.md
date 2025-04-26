# FslJS

FslJS is a Fast, Simple, and Lightweight framework for DOM mainpulation made in JavaScript.

### How to install

Install FslJS with `npm i fsljs`, and you're done!

<span style="background-color:rgba(222, 226, 0, 0.67); color: white; padding: 4px; border-radius: 7px;">💡Note that we will make a installer/manager for FslJS speciffically!</span>

### How to use

### Functions

Some functions to use:
 - `setConfig(config)`: Sets a config for FslJS, e. g.:
    ```javascript
    fsl.setConfig({
        appName: "MyApp",
        version: "5.6.2",
        environment: "production",
        author: "Some Author",
        description: "Super exciting description!",
    });
    ```
 - `getConfig()`: Logs to the console the config, e. g.:
    ```javascript
    fsl.getConfig();
    ```
    And prints to the console:
    ```bash
    appName: MyApp
    version: 5.6.2
    environment: production
    author: Some Author
    description: Super exciting description!
    ```

 - `$(element)`: Selects with `querySelectorAll()` the element.
                 Can be a collection of elements (A NodeList).
                 E. g.:
    ```javascript
    fsl.$(".my-container");
    ```
 - `setHTML(html)`: Sets to a element selected with `$()`, 
                    and changes the html of it. Overrides everything.
                    E. g.:
    ```javascript
    fsl.$(".my-container").setHTML("<h1>Hello, World!</h1>");
    ```
 - `textContent(text)`: Much like setHTML, but it only puts text, 
                        meaining that all HTML you put, it is text.
                        E. g.:
    ```javascript
    fsl.$(".my-paragraph").textContent("Hello, World!");
    ```

#### Components <sup style="background-color: purple; border-radius: 5px; color: white; padding: 2px;">ALPHA</sup>

Easly make new components, such as buttons!
In components, you just instantiate a class, add settings, and more!

Components made:
 - Component (default one)
 - ButtonComponent (make a button)

Use it instantianting a class and in the parameters putting the label.
Depending on the type of the component, there are different types of
parameters. This one is from the ButtonComponent one:
```javascript
let myButton = new ButtonComponent("Hello, World!", false,  "myHelloWorldButton");
```

### License

This package/project is licensed under the Apache 2.0 license.
You can see more information in the [LICENSE.md](LICENSE.md) file.

### Found a bug?

If you found a bug, please report it in GitHub issues.
We may solve the bug fast or slow, depending on the importance.