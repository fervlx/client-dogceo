package com.fervlx.dogceo

expect fun <T> runQuery( block: suspend () -> T )