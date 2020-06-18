(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'dogceo-mpp'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('dogceo-mpp'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'dogceo-mpp_test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'dogceo-mpp_test'.");
    }if (typeof this['dogceo-mpp'] === 'undefined') {
      throw new Error("Error loading module 'dogceo-mpp_test'. Its dependency 'dogceo-mpp' was not found. Please, check whether 'dogceo-mpp' is loaded prior to 'dogceo-mpp_test'.");
    }root['dogceo-mpp_test'] = factory(typeof this['dogceo-mpp_test'] === 'undefined' ? {} : this['dogceo-mpp_test'], kotlin, this['dogceo-mpp']);
  }
}(this, function (_, Kotlin, $module$dogceo_mpp) {
  'use strict';
  var DogCeoClient = $module$dogceo_mpp.com.fervlx.dogceo.DogCeoClient;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var toString = Kotlin.toString;
  function main() {
    var client = new DogCeoClient();
    testListAllBreeds(client);
    testImageUrl(client);
    testSubBreeds(client, 'wolfhound');
    testBreedImages(client, 'terrier');
    client.disconnect();
  }
  function testListAllBreeds$lambda$lambda(closure$list) {
    return function () {
      if (closure$list != null) {
        var tmp$;
        tmp$ = closure$list.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          println('Raza : ' + element.breed + ', sub razas : ' + element.subBreeds);
        }
      }return Unit;
    };
  }
  function testListAllBreeds$lambda(list) {
    printOutput('Razas encontradas', testListAllBreeds$lambda$lambda(list));
    return Unit;
  }
  function testListAllBreeds(client) {
    client.listAllBreeds_mvnuzk$(testListAllBreeds$lambda);
  }
  function testSubBreeds$lambda$lambda(closure$subbreed) {
    return function () {
      println(toString(closure$subbreed != null ? closure$subbreed.subBreeds : null));
      return Unit;
    };
  }
  function testSubBreeds$lambda(closure$breed) {
    return function (subbreed) {
      printOutput('Subraza de ' + closure$breed, testSubBreeds$lambda$lambda(subbreed));
      return Unit;
    };
  }
  function testSubBreeds(client, breed) {
    client.listSubBreeds_9lo9f$(breed, testSubBreeds$lambda(breed));
  }
  function testImageUrl$lambda$lambda(closure$url) {
    return function () {
      println(closure$url);
      return Unit;
    };
  }
  function testImageUrl$lambda(url) {
    printOutput('Url de imagen', testImageUrl$lambda$lambda(url));
    return Unit;
  }
  function testImageUrl(client) {
    client.imageRandom_rnyx3q$(testImageUrl$lambda);
  }
  function testBreedImages$lambda$lambda(closure$list) {
    return function () {
      if (closure$list != null) {
        var tmp$;
        tmp$ = closure$list.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          println(element);
        }
      }return Unit;
    };
  }
  function testBreedImages$lambda(closure$breed) {
    return function (list) {
      printOutput('Imagenes de la raza: ' + closure$breed, testBreedImages$lambda$lambda(list));
      return Unit;
    };
  }
  function testBreedImages(client, breed) {
    client.breedImages_bnyhtv$(breed, testBreedImages$lambda(breed));
  }
  function printOutput(message, block) {
    println(message);
    block();
  }
  _.main = main;
  _.testListAllBreeds_ct42ef$ = testListAllBreeds;
  _.testSubBreeds_jylrzt$ = testSubBreeds;
  _.testImageUrl_ct42ef$ = testImageUrl;
  _.testBreedImages_jylrzt$ = testBreedImages;
  _.printOutput_a4mwiz$ = printOutput;
  main();
  Kotlin.defineModule('dogceo-mpp_test', _);
  return _;
}));

//# sourceMappingURL=dogceo-mpp_test.js.map
