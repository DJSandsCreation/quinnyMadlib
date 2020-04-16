$(function () {
  const thingInput = $('#thing-input');
  const thing2Input = $('#thing2-input');
  const adjectiveInput = $('#adjective-input');
  const nounInput = $('#noun-input');
  const sent = $('#sentence');
  var thingDisplay = "";
  var thing2Display = "";
  var adjectiveDisplay = "";
  var nounDisplay = "";
  $('#first').click(function () {
    thingDisplay = thingInput.val();
  });
  $('#second').click(function () {
    thing2Display = thing2Input.val();

  });
  $('#third').click(function () {
    adjectiveDisplay = adjectiveInput.val();
  });
  $('#fourth').click(function () {
    nounDisplay = nounInput.val();
    sent.text(" Harley Quinn : I was never an establishment kind of gal. All things considered, I did good. I even went to college. I got my PhD. Had my heart broken once or twice. Finding love, it’s not easy. .. .So I threw myself into my work, became a psychiatrist. That’s when I met him. .. Mr. J. My Joker!! Oh, I fell hard. Like out of a " + thingDisplay + " without a " + thing2Display + "right in your dumb f**king face kind of hard. I lost all sense of who I was. I only had eyes for Pudding. We all know the saying, “Behind every " + adjectiveDisplay + " there’s a bada** broad.” Well, that was me. I was the " + nounDisplay + " behind some of Mr. J’s greatest stunts. Not that he let anyone know it.")
  });

});