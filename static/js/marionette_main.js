// Marionette test app

var ContactManager = new Marionette.Application();

ContactManager.addRegions({
    mainRegion : "#main-region"
});

ContactManager.addRegions({
    listRegion : "#list-region"
});

ContactManager.Contact = Backbone.Model.extend({
    defaults: {
        firstName: "",
        lastName: ""
    }
});

ContactManager.StaticView = Marionette.ItemView.extend({
    id: "static-view",
    tagName: "span",
    className: "instruction",
    template: "#static-template"
});

ContactManager.ListView = Marionette.ItemView.extend({
    id: "list-view",
    tagName: "ul",
    template: "#list-item-template"
});

ContactManager.ContactView = Marionette.ItemView.extend({
    template: "#contact-template",

    events: {
        "click p" : "alertPhoneNumber"
    },

    alertPhoneNumber: function() {
        $('#phoneNumber').html(this.model.escape("phoneNumber"));
    }
});

ContactManager.on("start", function() {
    console.log("ContactManager has started!");
    var staticView = new ContactManager.StaticView({
        template: "#different-static-template"
    });
    ContactManager.mainRegion.show(staticView);

    var listView = new ContactManager.ListView();

    ContactManager.listRegion.show(listView);

    var alice = new ContactManager.Contact({
        firstName: "Alice",
        lastName: "Arten",
        phoneNumber: "555-0184"
    });

    var aliceView = new ContactManager.ContactView({
        model: alice
    });

    ContactManager.mainRegion.show(aliceView);
});

ContactManager.start();
