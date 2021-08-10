({
init : function (component) {
// Find the component whose aura:id is “flowData”
var flow = component.find("flowData");
// In that component, start your flow. Reference the flow’s Unique Name.
flow.startFlow("Criar_registro");
}
    , closeThis: function(component, event, helper){
 var dismissActionPanel = $A.get("e.force:closeQuickAction");
        dismissActionPanel.fire();
       
    }
})