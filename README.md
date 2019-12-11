## Bing Image Search API
----
 The Bing Image Search API uses Bing's image search capabilities to get high-quality images according to user's search query. This API have three endpoints, which includes image search, get trending images and get insights about the specific image.

## Table of content
----

* [Image Search](#image-search)
* [Trending Images](#trending-images)
* [Image Insights](#insights-images)
* [References](#references)

## Image search
---
This API returns images which are related to the search term. In this API user can search or filters images according to different query parameters which are mentioned below.

#### URL

  /images/search

#### Method
  
  `POST` 
  
#### Query Parameters
The following are the **optional** query parameters that a request may include. You must URL encode the query parameter values.

   * `count = [UnsignedShort]` <br />
      The number of images to return in the response. The default is 35. <br />
   * `offset = [UnsignedShort]` <br />
      The zero-based offset that indicates the number of images to skip before returning images. The default is 0. <br />
   * `mkt = [String]` <br />
      The market where the results come from. Typically, mkt is the country where the user is making the request from. <br />
   * `safeSearch = [String]` <br />
      Filter images for adult content. The possible filter values are Off, Moderate and strict. The default is Moderate.
    
#### Filter Query Params
The following is the **optional** filter query parameter that you can use to filter the images. You must URL encode the query parameters. <br />

* `imageType = [String]` <br />
  By default it will show all types images. But you can Filter images by the following image types:
  * AnimatedGif - return animated gif images
  * Clipart - Return only clip art images
  * Line - Return only line drawings
  * Photo - Return only photographs 
<br /> 

* `color = [String]` <br />
    Following  color options are available:
    * ColorOnly - Return color images
    * Monochrome - Return black and white images
<br />


* `freshness = [String]` <br />
    Following discovery options can be used to filter images
    * Day - Return images discovered by Bing within the last 24 hours
    * Week - Return images discovered by Bing within the last 7 days
    * Month - Return images discovered by Bing within the last 30 days

#### Data Params
   `q = [String] [Required]` <br />
    The user's search query term which cannot be empty. Use this parameter only with the Image Search API. Do not specify this parameter     when calling the Trending Images API.

#### Success Response

  * **Status Code:** 200 <br />
   ```
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
     
   ```

 #### Error Responses
 ```
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
```

## Trending Images
----
This API returns images which are trending based on search requests. The response have different categories of the images, such as popular wallpaper searches or popular people searches.


#### URL

  /images/trending

#### Method
  
  `GET` 
  
#### Success Response
```
    "_type": "TrendingImages",
    "instrumentation": {
        "_type": "ResponseInstrumentation"
    },
    "categories": [
        {
            "title": "Popular people searches",
            "tiles": [
                {
                    "query": {
                        "text": "Kristin Davis",
                        "displayText": "Kristin Davis",
                        "webSearchUrl": "https://www.bing.com/images/search?q=Kristin+Davis&FORM=ISTRTH&id=77156A2ADB0FABE0EC1EEB3F5FABAFA00CD0CFE6&cat=Popular%20people%20searches&lpversion="
                    },
                    "image": {
                        "thumbnailUrl": "https://tse2.mm.bing.net/th?id=OET.8194fb81c3c74271bbc1e97aecb345f6&pid=Api",
                        "contentUrl": "http://i.dailymail.co.uk/i/pix/2009/09/13/article-0-05A905FC0000044D-180_468x532.jpg",
                        "width": 468,
                        "height": 532,
                        "thumbnail": {
                            "width": 468,
                            "height": 532
                        },
                        "imageId": "77156A2ADB0FABE0EC1EEB3F5FABAFA00CD0CFE6"
                    }
                }
        }..
              
    
```

#### Error Response
 ```
{
    status: 401,
    description: The subscription key is missing or is not valid.
},
{
    status: 500,
    description: Unexpected server error.
}
```

## Image Insights
----
This API returns insights about an image after providing insights token from image search API. The insights includes such as webpages, display text or captions.

#### URL

  /images/details

#### Method
  
  `GET` 

#### Request Parameter
 * `insightsToken = [String] [Required]` <br />
    It is the token from a Image search API call. <br />

* `query = [String] [optional]` <br />
    Search term from the user.<br />

#### Success Response  
```
{
   "_type": "ImageInsights",
    "instrumentation": {
        "_type": "ResponseInstrumentation"
    },
    "imageInsightsToken": "ccid_oTMZWDCL*mid_31856F9A330F23BFC22671EF2E44F35B3DA43553*simid_608035130687817356",
    "bestRepresentativeQuery": {
        "text": "Tom and Jerry Coloring Sheet",
        "displayText": "Tom and Jerry Coloring Sheet",
        "webSearchUrl": "https://www.bing.com/images/search?q=Tom+and+Jerry+Coloring+Sheet&id=31856F9A330F23BFC22671EF2E44F35B3DA43553&FORM=IDBQDM"
    },
    "imageCaption": {
        "caption": "Tom and Jerry  New cartoons coming soon!",
        "dataSourceUrl": "https://www.pinterest.com/angelnegro30/tomjerry/",
        "relatedSearches": []
    }
}
```

#### Error Response
```
{
    "message": "Access denied. Insights token not found.",
    description: Insight token is required parameter for this API
}

```

## References
- [Image search API Documentation](https://docs.microsoft.com/en-us/rest/api/cognitiveservices-bingsearch/bing-images-api-v7-reference#headers)

