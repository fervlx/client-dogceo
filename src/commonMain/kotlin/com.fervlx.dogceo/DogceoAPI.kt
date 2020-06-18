package com.fervlx.dogceo

import io.ktor.client.HttpClient
import io.ktor.client.request.get
import kotlinx.serialization.UnstableDefault
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement

internal class DogceoAPI {

    private val client: HttpClient by lazy { HttpClient() }

    private companion object EndPotins {

        const val BASE_URL     = "https://dog.ceo/api"
        const val ALL_BREEDS   = "/breeds/list/all"
        const val IMAGE_RANDOM = "/breeds/image/random"
        const val BREED_IMAGES_START = "/breed/"
        const val BREED_IMAGES_END = "/images"
        const val SUB_BREED_START  = "/breed/"
        const val SUB_BREED_END    = "/list"
    }

    suspend fun getAllBreeds() : List<Breed>? {

        val jelement = fetchBody( BASE_URL + ALL_BREEDS )
        val breeds  = ArrayList<Breed>()

        jelement?.jsonObject?.entries?.forEach {

            val breed = Breed( it.key, it.value.jsonArray.map { jsonElement -> jsonElement.toString()  })
            breeds.add( breed )

        } ?: emptyList<Breed>()

        return breeds
    }

    suspend fun getUrlImageRandom() : String? {

        val jelement = fetchBody( BASE_URL + IMAGE_RANDOM )
        return jelement.toString()
    }

    suspend fun getBreedImages( breed: String ) : List<String>? {

        val jelement = fetchBody( BASE_URL + BREED_IMAGES_START + breed + BREED_IMAGES_END )
        return jelement?.jsonArray?.map { element -> element.toString()  }
    }

    suspend fun getSubBreads( breed: String ) : Breed {

        val jelement = fetchBody( BASE_URL + SUB_BREED_START + breed + SUB_BREED_END )
        return Breed( breed, jelement?.jsonArray?.map { element -> element.toString() } ?: emptyList() )
    }

    fun dispose() {
        client.close()
    }

    @OptIn(UnstableDefault::class)
    private suspend fun fetchBody(endpoint: String ) : JsonElement? {

        client.get<String>(endpoint).let { res ->
            return Json.parseJson(res).jsonObject["message"]
        }
    }
}