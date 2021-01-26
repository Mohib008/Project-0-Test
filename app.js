d3.select(".remove")
  .on("click", function(){
      d3.selectAll(".note")
        .remove();
  });

d3.select(".lucky")
  .on("click", function(){
      d3.selectAll(".note")
        .style("font-size", function(){
            return Math.random() * 100 + "px";
        });
  });

  let input = d3.select("input");
  let preview = d3.select(".preview");

d3.select(".new-note").on("submit", function(){
    d3.event.preventDefault();
    d3.select(".notes")
      .append("p")
      .classed("note", true)
      .text(input.property("value"));
      input.property('value', '');
      setPreview(none);
});

input.on("input", function(){
    let note = d3.event.target.value;
    setPreview(none);
});

function setPreview(val) {
    preview.text(val)
       .classed("hide", val === '');
};

