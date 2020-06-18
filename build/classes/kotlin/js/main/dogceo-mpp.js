(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'ktor-ktor-client-core', 'kotlinx-serialization-kotlinx-serialization-runtime', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('ktor-ktor-client-core'), require('kotlinx-serialization-kotlinx-serialization-runtime'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'dogceo-mpp'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'dogceo-mpp'.");
    }if (typeof this['ktor-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'dogceo-mpp'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'dogceo-mpp'.");
    }if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
      throw new Error("Error loading module 'dogceo-mpp'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'dogceo-mpp'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'dogceo-mpp'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'dogceo-mpp'.");
    }root['dogceo-mpp'] = factory(typeof this['dogceo-mpp'] === 'undefined' ? {} : this['dogceo-mpp'], kotlin, this['ktor-ktor-client-core'], this['kotlinx-serialization-kotlinx-serialization-runtime'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$ktor_ktor_client_core, $module$kotlinx_serialization_kotlinx_serialization_runtime, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var toString = Kotlin.toString;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.Json;
  var HttpClient = $module$ktor_ktor_client_core.io.ktor.client.HttpClient_f0veat$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var takeFrom = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.takeFrom_jl1sg7$;
  var utils = $module$ktor_ktor_client_core.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core.io.ktor.client.request.HttpRequestBuilder;
  var call = $module$ktor_ktor_client_core.io.ktor.client.call.call_30bfl5$;
  var throwCCE = Kotlin.throwCCE;
  var call_0 = $module$ktor_ktor_client_core.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core.io.ktor.client.call.TypeInfo;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  function Breed(breed, subBreeds) {
    this.breed = breed;
    this.subBreeds = subBreeds;
  }
  Breed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Breed',
    interfaces: []
  };
  Breed.prototype.component1 = function () {
    return this.breed;
  };
  Breed.prototype.component2 = function () {
    return this.subBreeds;
  };
  Breed.prototype.copy_kwv3np$ = function (breed, subBreeds) {
    return new Breed(breed === void 0 ? this.breed : breed, subBreeds === void 0 ? this.subBreeds : subBreeds);
  };
  Breed.prototype.toString = function () {
    return 'Breed(breed=' + Kotlin.toString(this.breed) + (', subBreeds=' + Kotlin.toString(this.subBreeds)) + ')';
  };
  Breed.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.breed) | 0;
    result = result * 31 + Kotlin.hashCode(this.subBreeds) | 0;
    return result;
  };
  Breed.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.breed, other.breed) && Kotlin.equals(this.subBreeds, other.subBreeds)))));
  };
  function get$lambda($receiver) {
    return Unit;
  }
  function DogceoAPI() {
    DogceoAPI$EndPotins_getInstance();
    this.client_50uz27$_0 = lazy(DogceoAPI$client$lambda);
  }
  Object.defineProperty(DogceoAPI.prototype, 'client_0', {
    get: function () {
      return this.client_50uz27$_0.value;
    }
  });
  function DogceoAPI$EndPotins() {
    DogceoAPI$EndPotins_instance = this;
    this.BASE_URL = 'https://dog.ceo/api';
    this.ALL_BREEDS = '/breeds/list/all';
    this.IMAGE_RANDOM = '/breeds/image/random';
    this.BREED_IMAGES_START = '/breed/';
    this.BREED_IMAGES_END = '/images';
    this.SUB_BREED_START = '/breed/';
    this.SUB_BREED_END = '/list';
  }
  DogceoAPI$EndPotins.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EndPotins',
    interfaces: []
  };
  var DogceoAPI$EndPotins_instance = null;
  function DogceoAPI$EndPotins_getInstance() {
    if (DogceoAPI$EndPotins_instance === null) {
      new DogceoAPI$EndPotins();
    }return DogceoAPI$EndPotins_instance;
  }
  function Coroutine$getAllBreeds($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$getAllBreeds.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getAllBreeds.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getAllBreeds.prototype.constructor = Coroutine$getAllBreeds;
  Coroutine$getAllBreeds.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1;
            this.state_0 = 2;
            this.result_0 = this.$this.fetchBody_0(DogceoAPI$EndPotins_getInstance().BASE_URL + DogceoAPI$EndPotins_getInstance().ALL_BREEDS, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var jelement = this.result_0;
            var breeds = ArrayList_init();
            var tmp$_2;
            if ((tmp$_0 = (tmp$ = jelement != null ? jelement.jsonObject : null) != null ? tmp$.entries : null) != null) {
              var tmp$_3;
              tmp$_3 = tmp$_0.iterator();
              while (tmp$_3.hasNext()) {
                var element = tmp$_3.next();
                var tmp$_4 = element.key;
                var $receiver = element.value.jsonArray;
                var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
                var tmp$_5;
                tmp$_5 = $receiver.iterator();
                while (tmp$_5.hasNext()) {
                  var item = tmp$_5.next();
                  destination.add_11rb$(item.toString());
                }
                var breed = new Breed(tmp$_4, destination);
                breeds.add_11rb$(breed);
              }
              tmp$_2 = Unit;
            } else
              tmp$_2 = null;
            (tmp$_1 = tmp$_2) != null ? tmp$_1 : emptyList();
            return breeds;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DogceoAPI.prototype.getAllBreeds = function (continuation_0, suspended) {
    var instance = new Coroutine$getAllBreeds(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getUrlImageRandom($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$getUrlImageRandom.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getUrlImageRandom.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getUrlImageRandom.prototype.constructor = Coroutine$getUrlImageRandom;
  Coroutine$getUrlImageRandom.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.fetchBody_0(DogceoAPI$EndPotins_getInstance().BASE_URL + DogceoAPI$EndPotins_getInstance().IMAGE_RANDOM, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var jelement = this.result_0;
            return toString(jelement);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DogceoAPI.prototype.getUrlImageRandom = function (continuation_0, suspended) {
    var instance = new Coroutine$getUrlImageRandom(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getBreedImages_61zpoe$($this, breed_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$breed = breed_0;
  }
  Coroutine$getBreedImages_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getBreedImages_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getBreedImages_61zpoe$.prototype.constructor = Coroutine$getBreedImages_61zpoe$;
  Coroutine$getBreedImages_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.fetchBody_0(DogceoAPI$EndPotins_getInstance().BASE_URL + DogceoAPI$EndPotins_getInstance().BREED_IMAGES_START + this.local$breed + DogceoAPI$EndPotins_getInstance().BREED_IMAGES_END, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var jelement = this.result_0;
            var tmp$_0;
            if ((tmp$ = jelement != null ? jelement.jsonArray : null) != null) {
              var destination = ArrayList_init_0(collectionSizeOrDefault(tmp$, 10));
              var tmp$_1;
              tmp$_1 = tmp$.iterator();
              while (tmp$_1.hasNext()) {
                var item = tmp$_1.next();
                destination.add_11rb$(item.toString());
              }
              tmp$_0 = destination;
            } else
              tmp$_0 = null;
            return tmp$_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DogceoAPI.prototype.getBreedImages_61zpoe$ = function (breed_0, continuation_0, suspended) {
    var instance = new Coroutine$getBreedImages_61zpoe$(this, breed_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getSubBreads_61zpoe$($this, breed_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$breed = breed_0;
  }
  Coroutine$getSubBreads_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getSubBreads_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getSubBreads_61zpoe$.prototype.constructor = Coroutine$getSubBreads_61zpoe$;
  Coroutine$getSubBreads_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = this.$this.fetchBody_0(DogceoAPI$EndPotins_getInstance().BASE_URL + DogceoAPI$EndPotins_getInstance().SUB_BREED_START + this.local$breed + DogceoAPI$EndPotins_getInstance().SUB_BREED_END, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var jelement = this.result_0;
            var tmp$_1;
            if ((tmp$ = jelement != null ? jelement.jsonArray : null) != null) {
              var destination = ArrayList_init_0(collectionSizeOrDefault(tmp$, 10));
              var tmp$_2;
              tmp$_2 = tmp$.iterator();
              while (tmp$_2.hasNext()) {
                var item = tmp$_2.next();
                destination.add_11rb$(item.toString());
              }
              tmp$_1 = destination;
            } else
              tmp$_1 = null;
            return new Breed(this.local$breed, (tmp$_0 = tmp$_1) != null ? tmp$_0 : emptyList());
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DogceoAPI.prototype.getSubBreads_61zpoe$ = function (breed_0, continuation_0, suspended) {
    var instance = new Coroutine$getSubBreads_61zpoe$(this, breed_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DogceoAPI.prototype.dispose = function () {
    this.client_0.close();
  };
  function Coroutine$fetchBody_0($this, endpoint_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$endpoint = endpoint_0;
  }
  Coroutine$fetchBody_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fetchBody_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fetchBody_0.prototype.constructor = Coroutine$fetchBody_0;
  Coroutine$fetchBody_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = this.$this.client_0;
            var host_0;
            var body_0;
            host_0 = 'localhost';
            body_0 = utils.EmptyContent;
            var $receiver_1 = new HttpRequestBuilder_init();
            url($receiver_1, 'http', host_0, 0, '/');
            $receiver_1.method = HttpMethod.Companion.Get;
            $receiver_1.body = body_0;
            takeFrom($receiver_1.url, this.local$endpoint);
            get$lambda($receiver_1);
            this.state_0 = 2;
            this.result_0 = call($receiver_0, $receiver_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            this.state_0 = 3;
            this.result_0 = this.result_0.receive_jo9acv$(new TypeInfo_init(PrimitiveClasses$stringClass, call_0.JsType), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0 = typeof (tmp$_0 = this.result_0) === 'string' ? tmp$_0 : throwCCE();
            this.result_0;
            var res = this.result_0;
            return Json.Default.parseJson_61zpoe$(res).jsonObject.get_11rb$('message');
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  DogceoAPI.prototype.fetchBody_0 = function (endpoint_0, continuation_0, suspended) {
    var instance = new Coroutine$fetchBody_0(this, endpoint_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function DogceoAPI$client$lambda() {
    return HttpClient();
  }
  DogceoAPI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DogceoAPI',
    interfaces: []
  };
  function DogCeoClient() {
    this.api_0 = new DogceoAPI();
  }
  DogCeoClient.prototype.disconnect = function () {
    this.api_0.dispose();
  };
  function Coroutine$DogCeoClient$listAllBreeds$lambda(closure$block_0, this$DogCeoClient_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
    this.local$this$DogCeoClient = this$DogCeoClient_0;
  }
  Coroutine$DogCeoClient$listAllBreeds$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DogCeoClient$listAllBreeds$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DogCeoClient$listAllBreeds$lambda.prototype.constructor = Coroutine$DogCeoClient$listAllBreeds$lambda;
  Coroutine$DogCeoClient$listAllBreeds$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$DogCeoClient.api_0.getAllBreeds(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$block(this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function DogCeoClient$listAllBreeds$lambda(closure$block_0, this$DogCeoClient_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$DogCeoClient$listAllBreeds$lambda(closure$block_0, this$DogCeoClient_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  DogCeoClient.prototype.listAllBreeds_mvnuzk$ = function (block) {
    runQuery(DogCeoClient$listAllBreeds$lambda(block, this));
  };
  function Coroutine$DogCeoClient$imageRandom$lambda(closure$block_0, this$DogCeoClient_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
    this.local$this$DogCeoClient = this$DogCeoClient_0;
  }
  Coroutine$DogCeoClient$imageRandom$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DogCeoClient$imageRandom$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DogCeoClient$imageRandom$lambda.prototype.constructor = Coroutine$DogCeoClient$imageRandom$lambda;
  Coroutine$DogCeoClient$imageRandom$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$DogCeoClient.api_0.getUrlImageRandom(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$block(this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function DogCeoClient$imageRandom$lambda(closure$block_0, this$DogCeoClient_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$DogCeoClient$imageRandom$lambda(closure$block_0, this$DogCeoClient_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  DogCeoClient.prototype.imageRandom_rnyx3q$ = function (block) {
    runQuery(DogCeoClient$imageRandom$lambda(block, this));
  };
  function Coroutine$DogCeoClient$breedImages$lambda(closure$block_0, this$DogCeoClient_0, closure$breed_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
    this.local$this$DogCeoClient = this$DogCeoClient_0;
    this.local$closure$breed = closure$breed_0;
  }
  Coroutine$DogCeoClient$breedImages$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DogCeoClient$breedImages$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DogCeoClient$breedImages$lambda.prototype.constructor = Coroutine$DogCeoClient$breedImages$lambda;
  Coroutine$DogCeoClient$breedImages$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$DogCeoClient.api_0.getBreedImages_61zpoe$(this.local$closure$breed, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$block(this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function DogCeoClient$breedImages$lambda(closure$block_0, this$DogCeoClient_0, closure$breed_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$DogCeoClient$breedImages$lambda(closure$block_0, this$DogCeoClient_0, closure$breed_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  DogCeoClient.prototype.breedImages_bnyhtv$ = function (breed, block) {
    runQuery(DogCeoClient$breedImages$lambda(block, this, breed));
  };
  function Coroutine$DogCeoClient$listSubBreeds$lambda(closure$block_0, this$DogCeoClient_0, closure$bread_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
    this.local$this$DogCeoClient = this$DogCeoClient_0;
    this.local$closure$bread = closure$bread_0;
  }
  Coroutine$DogCeoClient$listSubBreeds$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$DogCeoClient$listSubBreeds$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$DogCeoClient$listSubBreeds$lambda.prototype.constructor = Coroutine$DogCeoClient$listSubBreeds$lambda;
  Coroutine$DogCeoClient$listSubBreeds$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$DogCeoClient.api_0.getSubBreads_61zpoe$(this.local$closure$bread, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$block(this.result_0);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function DogCeoClient$listSubBreeds$lambda(closure$block_0, this$DogCeoClient_0, closure$bread_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$DogCeoClient$listSubBreeds$lambda(closure$block_0, this$DogCeoClient_0, closure$bread_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  DogCeoClient.prototype.listSubBreeds_9lo9f$ = function (bread, block) {
    runQuery(DogCeoClient$listSubBreeds$lambda(block, this, bread));
  };
  DogCeoClient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DogCeoClient',
    interfaces: []
  };
  function Coroutine$runQuery$lambda(closure$block_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
  }
  Coroutine$runQuery$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runQuery$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runQuery$lambda.prototype.constructor = Coroutine$runQuery$lambda;
  Coroutine$runQuery$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$block(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function runQuery$lambda(closure$block_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$runQuery$lambda(closure$block_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function runQuery(block) {
    launch(coroutines.GlobalScope, void 0, void 0, runQuery$lambda(block));
  }
  var package$com = _.com || (_.com = {});
  var package$fervlx = package$com.fervlx || (package$com.fervlx = {});
  var package$dogceo = package$fervlx.dogceo || (package$fervlx.dogceo = {});
  package$dogceo.Breed = Breed;
  $$importsForInline$$['ktor-ktor-client-core'] = $module$ktor_ktor_client_core;
  package$dogceo.DogceoAPI = DogceoAPI;
  package$dogceo.DogCeoClient = DogCeoClient;
  package$dogceo.runQuery_lnyleu$ = runQuery;
  Kotlin.defineModule('dogceo-mpp', _);
  return _;
}));

//# sourceMappingURL=dogceo-mpp.js.map
