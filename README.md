## Meteor RiotJS integration

RiotJS is a react like framework. It works really well with meteor. To add meteor riot, use:

`meteor add nisargshah100m:meteor-riot`

### Riot Router

This package also includes [riot-router](https://github.com/gabrielmoreira/riot-router).

### Auto updating

Riot requires us to manually specify when the update should happen. This works well with Meteor.autorun:

```
<foo>
  <div each={item in items}>{item.name}</div>
  
  <script>
    var self = this;
    
    Meteor.autorun(function() {
    	self.items = Items.find({}).fetch();
    	self.update()
	})
  </script>
</foo>
```