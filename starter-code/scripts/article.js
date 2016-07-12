var articles = [];

function Article (opts) {
  // TODO: Use the object passed in to complete this constructor function:
  // Save ALL the properties of `opts` into `this`.
  this.author = opts.author;
  this.category = opts.category;
  //this will attach the author property from our opts object to THIS.author property for the current
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.attr('data-category', this.category);

  // NOW use jQuery to fill in the rest of the current tempalte clone with properties from the articles
    //We need:
    //author name
    //author url
    //all the other stuff from blogArticles.js that are obviously article properties

  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  //you could write a date evalutation function for this last one that returns time in a different format rather than "X days ago"
  //also update the datetime 'property' of the template

/* TODO: This clone article is no longer a template, as it now has real data attached to it!  We need to account for that before this current article gets rendered to our DOM.

We need to throw in some logic here to remove that template class on the new constructed objects so that they won't get selected as templates?*/
  return $newArticle;
};

ourLocalData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  //there's really good documentation on MDN about SORT so check that if you have questions
});

ourLocalData.forEach(function(ele) {
  //each of these ele things is the object literal from local data.  You can also call it data or element, or anything else really since it's just the argument's name..
  artiles.push(new Article(ele));
});

articles.forEach(function(a) {
  $('articles').append(a.toHtml());
});
