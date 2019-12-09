**Bing Image Search API**
----
 The Bing Image Search API uses Bing's image search capabilities by sending search queries to the API, to get high-quality images. It provides images only as search results.

## Table of content
* [Get Started](#get-started)
    * [Image Search](#image-search)
    * [Trending Images](#trending-images)
* [References](#references)

### Image search
## URL

  /images/search

## Method
  
  `POST` 

## Request Header
* `Ocp-Apim-Subscription-Key [String]` <br />
  Required Subscription key which provides access to this API
  
## Query Params
The following are the **optional** query parameters that a request may include. You must URL encode the query parameter values.

   * `count=[UnsignedShort]` <br />
      The number of images to return in the response.  The default is 35. <br />
   * `offset=[UnsignedShort]` <br />
      The zero-based offset that indicates the number of images to skip before returning images. The default is 0. <br />
   * `mkt=[String]` <br />
      The market where the results come from. Typically, mkt is the country where the user is making the request from. <br />
   * `safeSearch=[String]` <br />
      Filter images for adult content. The possible filter values are Off, Moderate and strict. The default is Moderate.

## Filter Query Params
The following is the **optional** filter query parameter that you can use to filter the images that Bing returns. You must URL encode the query parameters. <br />

 `imageType=[String]` <br />
  By default it will show all images. But you can Filter images by the following image types:
  
* AnimatedGif - return animated gif images
* Clipart - Return only clip art images
* Line - Return only line drawings
* Photo - Return only photographs
   

## Data Params
   `q=[String] [Required]` <br />
    The user's search query term which cannot be empty. Use this parameter only with the Image Search API. Do not specify this parameter     when calling the Trending Images API.

## Success Response

  * **Status Code:** 200 <br />
   ```{ 
   "_type": "Images",
    "instrumentation": {
        "_type": "ResponseInstrumentation"
    },
    "readLink": "images/search?q=tom and jerry",
    "webSearchUrl": "https://www.bing.com/images/search?q=tom and jerry&FORM=OIIARP",
    "queryContext": {
        "originalQuery": "tom and jerry",
        "alterationDisplayQuery": "tom and jerry",
        "alterationOverrideQuery": "+tom and jerry",
        "alterationMethod": "AM_JustChangeIt",
        "alterationType": "CombinedAlterationsChained"
    },
    "totalEstimatedMatches": 655,
    "nextOffset": 85,
    "currentOffset": 10,
    "value": [
          {
            "webSearchUrl": "https://www.bing.com/images/search?view=detailv2&FORM=OIIRPO&q=tom+and+jerry&id=F95CA92C6DCC72FED1FF4DB5561D84907B9CF0C4&simid=608015077509107008",
            "name": "Tom and Jerry Hd Wallpapers ! Cartoon Wallpaper Tom and ...",
            "thumbnailUrl": "https://tse4.mm.bing.net/th?id=OIP.xHICXWvgwI-XeDcbua5atQHaEK&pid=Api",
            "datePublished": "2014-10-23T12:00:00.0000000Z",
            "isFamilyFriendly": true,
            "contentUrl": "http://2.bp.blogspot.com/-A0GtMZ7GnL8/VDYn61kZb1I/AAAAAAAAAMY/-MxSi3e4w70/s1600/Tom-And-Jerry-Wallpaper.jpg",
            "hostPageUrl": "http://w4wallpapers.blogspot.com/2014/10/tom-and-jerry-hd-wallpapers-cartoon_8.html",
            "contentSize": "166721 B",
            "encodingFormat": "jpeg",
            "hostPageDisplayUrl": "w4wallpapers.blogspot.com/2014/10/tom-and-jerry-hd-wallpapers-cartoon_8.html",
             "width": 1600,
            "height": 900,
            "hostPageFavIconUrl": "https://www.bing.com/th?id=ODF.kCKFU1-d0l3Elu2Vvbpmew&pid=Api",
            "hostPageDomainFriendlyName": "blogspot.com",
            "thumbnail": {
                "width": 474,
                "height": 266
            },
            "imageInsightsToken": "ccid_xHICXWvg*mid_F95CA92C6DCC72FED1FF4DB5561D84907B9CF0C4*simid_608015077509107008*thid_OIP.xHICXWvgwI-XeDcbua5atQHaEK",
            "insightsMetadata": {
                "pagesIncludingCount": 156,
                "availableSizesCount": 64
            },
            "imageId": "F95CA92C6DCC72FED1FF4DB5561D84907B9CF0C4",
             "accentColor": "C66E05"
        },...]
     }
   ```
    
 ## Error Responses
 ```{
 {
    status: 400,
    description: One of the query parameters is missing or not valid.
},
{
    status: 401,
    description: The subscription key is missing or is not valid.
},
{
    status: 500,
    description: Unexpected server error.
}
  }
```

### Trending Images

## URL

  /images/trending

## Method
  
  `POST` 
## Request Header
* `Ocp-Apim-Subscription-Key [String]` <br />
  Required Subscription key which provides access to this API
  
## Success Response
```{
    "_type": "TrendingImages",
    "instrumentation": {
        "_type": "ResponseInstrumentation"
    },
    "categories": [{}]
  }
```

## References
- [Image search API Documentation](https://docs.microsoft.com/en-us/rest/api/cognitiveservices-bingsearch/bing-images-api-v7-reference#headers)

