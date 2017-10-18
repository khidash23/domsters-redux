$(document).ready(function()
{
  var jay = $(".section.jay");
  var domsters = $(".section.domsters");

  //buttons
  var jayButton = $(".jayButton");
  var domButton = $(".domButton");

  var jayVisible = false;
  var domVisible = false;

  jayButton.click(function()
  {
    jay.css("display", "block");
    jayVisible = true;

    console.log("jay clicked!");
    if (domVisible)
    {
      domsters.css("display", "none");
      domVisible = false;
    }
  });

  domButton.click(function()
  {
    domsters.css("display", "block");
    domVisible = true;

    console.log("dom clicked!");
    if (jayVisible)
    {
      jay.css("display", "none");
      jayVisible = false;
    }
  });

  jayButton.click();
  //jay.css("display", "none");
  //domsters.css("display", "none");
});
