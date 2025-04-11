# FslJS

FslJS is a Fast, Simple, and Lightweight framework for DOM mainpulation made in JavaScript.

### How to install

Install FslJS with `npm i fsljs`, and you're done!

Note that we will make a installer/manager for FslJS speciffically!

### How to use

For now, we just implemented some basic functions:
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

### License

This package/project is licensed under the Apache 2.0 license.
You can see more information in the [LICENSE.md](LICENSE.md) file.

### Found a bug?

If you found a bug, please report it in GitHub issues.
We may solve the bug fast or slow, depending on the importance.