package com.weather.letsplay

class ListNode2 {
    var value = 0
    var next: ListNode2? = null

    constructor() {}

    constructor(value: Int) {
        this.value = value
    }
    constructor(value: Int, next: ListNode2?) {
        this.value = value
        this.next = next
    }
}

class Experiment{

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            val arr = arrayOf(2,3,4,0,5,0,3,0)
            val arrSum = arrayOf(1, 4, 2, 10, 2, 3, 1, 0, 20 )
            val arrDuplicate = arrayOf(0,0,0,0,0,2,2,3,3,4)
           // Experiment().getTwoSum(arr, 6).forEach { println(it) }
                    //Experiment().reverseList(arr).forEach { println(it) }
           // Experiment().reverseListRecursive(arr, 0, arr.size-1).forEach { println(it) }
           // println(Experiment().removeDuplicates(arrDuplicate))
            val threeSum = arrayOf(0, -1, 2, -3, 1)
            Experiment().getThreeSum(threeSum, 0)
        }
    }

    fun removeDuplicates(arr: Array<Int>): Int {
        var count = 1
        var i = 1
        while (i < arr.size){
            if(arr[i] != arr[i-1]){
                arr[count++] = arr[i]
            }
            i++
        }
        return count
    }

    fun getThreeSum(array: Array<Int>, sum: Int){
        var i = 0
        var j = 0
        while (i < array.size-1) {
            j = i + 1
            println("jindex" + j)
            val map = mutableSetOf<Int>()
            while (j < array.size){
                var value = -(array[i] + array[j])
                if(map.contains(value)){
                    println(array[i])
                    println(array[j])
                    println(value)
                } else {
                    map.add(array[j])
                }
                j++
            }
            i++
        }
    }

    fun getTwoSum(array: Array<Int>, sum: Int) : MutableList<Int> {
        val map = mutableMapOf<Int, Int>()
        val list = mutableListOf<Int>()
        array.forEachIndexed { index, value ->
            val diff = sum - value
            if (map.containsKey(diff)){
                map[diff]?.let { list.add(0, it) }
                list.add(1, index)
                return list
            }
            map[value] = index
        }
        return list
    }

    fun flushZeros(arr: Array<Int>) : Array<Int> {
        var count = 0
        var i=0
        while (i < arr.size){
            if (arr[i] != 0){
                arr[count++] = arr[i]
            }
            i++
        }

        while (count < arr.size){
            arr[count++] = 0
        }
        return arr
    }

    fun reverseList(array: Array<Int>) : Array<Int> {
        var temp = 0;
        var i = 0
        var last = array.size - 1
        while (i < last){
            temp = array[i]
            array[i] = array[last]
            array[last] = temp
            i++
            last--
        }
        return array
    }

    fun reverseListRecursive(array: Array<Int>, first: Int, last: Int) : Array<Int> {
        var temp = 0
        if(first <= last) {
            temp = array[first]
            array[first] = array[last]
            array[last] = temp
            reverseListRecursive( array,first+1, last-1)
        }


        return array
    }

    fun maxSumSubArray(array: Array<Int>, k: Int) : Int{
        if(array.size < k) {
            return -1
        }

        var max_sum = 0
        var i = 0
        while (i < k){
            max_sum += array[i]
            i++
        }
        var window_sum = max_sum
        var j = k
        while (j < array.size){
            window_sum += array[j] - array[j-k]
            max_sum = Math.max(window_sum, max_sum)
            j++
        }

        return max_sum
    }
}