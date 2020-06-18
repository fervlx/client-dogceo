package com.fervlx.dogceo

import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch

actual fun <T> runQuery( block: suspend () -> T ) {

    GlobalScope.launch {
        block()
    }
}