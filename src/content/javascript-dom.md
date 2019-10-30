{% extends "base.njk" %}

{% block content %}
{% markdown %}

# Using Javascript to manipulate the DOM

## Inserting new elements: The simple version

```html
<div id="container"></div>
```

```js
const button = document.createElement("button");
const container = document.getElementById("container");

button.id = "clicky";
button.innerHTML = "Click Me";

container.appendChild(button);
```

* you can’t currently add an attribute to the element when it's created; you must use `setAttribute` or similar method elsewhere on the script
* You may think about adding an `id` attribute to the element, but it’s unlikely that you need to do so. You already have a reference to the element when you create it.
  * Only reason why you may need an id or class is if you'll reference the element from a separate script
* Once you add the element to the page, it will follow all the rules you apply via CSS, either a stylesheet, or Javascript

## Inserting new elements: insertAdjacentHTML

```html
<aside id="sidecontent"></aside>
```

```js
const sidecontent = document.getElementById("sidecontent");

sidecontent.insertAdjacentHTML("beforebegin", "<p>Day after day</p>");

sidecontent.insertAdjacentHTML("afterbegin", "<h1>Add It Up</h1>");

sidecontent.insertAdjacentHTML("beforeend", "<p>But the day after today</p>");

sidecontent.insertAdjacentHTML("afterend", "<p>I will stop</p>");
```

{% endmarkdown %}
{% endblock %}
