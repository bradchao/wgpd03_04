var var2 = 321;
var MenuLayer = cc.Layer.extend({
    item2:null,
    ctor:function () {
        this._super();


        this.initMenu();

        return true;
    },

    initMenu: function () {
        cc.MenuItemFont.setFontSize(52);
        var menuItem1 = new cc.MenuItemFont("Item1",this.doItem1, this);
        cc.MenuItemFont.setFontSize(36);
        var menuItem2 = new cc.MenuItemFont("Item2",this.doItem2, this);
        cc.MenuItemFont.setFontSize(48);
        var menuItem3 = new cc.MenuItemFont("Item3",this.doItem3, this);
        var menuItem4 = new cc.MenuItemFont("Item4",this.doItem4, this);
        var menuItem5 = new cc.MenuItemFont("Item5",this.doItem5, this);
        var menuItem6 = new cc.MenuItemFont("Item6",this.doItem6, this);
        var menuItem7 = new cc.MenuItemFont("Item7",this.doItem7, this);

        var menu = new cc.Menu(
            menuItem1, menuItem2,menuItem3, menuItem4, menuItem5
            ,menuItem6,menuItem7);
        menu.alignItemsVertically();
        this.addChild(menu);

    },

    doItem1: function () {
        cc.director.pushScene(new Item1Scene());
    },
    doItem2: function () {
        cc.director.pushScene(new Item2Scene(100));
    },
    doItem3: function () {
        cc.director.pushScene(new Item3Scene());
    },
    doItem4: function () {
        cc.director.pushScene(new Item4Scene());
    },
    doItem5: function () {
        cc.director.pushScene(new Item5Scene());
    },
    doItem6: function () {
        cc.director.pushScene(new Item6Scene());
    },
    doItem7: function () {
        cc.director.pushScene(new Item7Scene());
    },


});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});

