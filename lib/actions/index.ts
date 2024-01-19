"use server"

import axios from 'axios';

export async function ConversationRepo(UserText: string) {
    if(!UserText) return;

    const options = {
        method: 'GET',
        url: 'https://islam-ai-api.p.rapidapi.com/api/bot',
        params: {
            question: UserText,
        },
        headers: {
            'X-RapidAPI-Key': String(process.env.RAPID_API_BOT),
            'X-RapidAPI-Host': 'islam-ai-api.p.rapidapi.com'
        },

    };

    try {
        const response = await axios.request(options);
        console.log(response.data);

        return response.data;
    } catch (error: any) {
        throw new Error(`Failed to Fetch Data: ${error.message}`);
    }
}

export async function YouTubeVideoLive(): Promise<string | null> {
    try {
      // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
      const apiKey = String(process.env.YOUTUBE_LIVE_API);
      const channelId = String(process.env.YOUTUBE_CHANNEL_ID); // Replace with your channel ID
  
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&eventType=live&channelId=${channelId}&key=${apiKey}`
      );
  
      const data = await response.json();
  
      // Log the response data for debugging
    //   console.log('YouTube Data API response:', data);
  
      // Check if there is a live stream
      const liveStreamVideoId = data.items[0]?.id.videoId;
  
      if (liveStreamVideoId) {
        return liveStreamVideoId;
      } else {
        // Handle case when there is no live stream
        console.log('No live stream found');
        return null;
      }
    } catch (error) {
      // Handle error
      console.error('Error fetching live stream:', error);
      return null;
    }
  }


  interface PrayerTimings {
    Fajr: string;
    Zuhr: string;
    Asr: string;
    Magrib: string;
    Isha: string;
    Sunrise: string;
    Sunset: string;
    Englishdate: string;
    Hijridate: string;
    Holymonth: string;
  }

  export async function PrayerTimeFunction(): Promise<PrayerTimings> {
    try {

      const url = 'http://api.aladhan.com/v1/timingsByCity?city=Madurai&country=India&method=8';
      const response = await fetch(url);
      const output = await response.json();
      // console.log(output);

      // Prayers Time
      const fajr = output.data.timings.Fajr;
      const zuhr = output.data.timings.Dhuhr;
      const asr = output.data.timings.Asr;
      const magrib = output.data.timings.Maghrib;
      const isha = output.data.timings.Isha;

      // Sun Parameters
      const sunrise = output.data.timings.Sunrise;
      const sunset = output.data.timings.Sunset;

      // Date and Hijri
      const englishdate = output.data.date.readable;
      const hijridate = output.data.date.hijri.date;
      const holymoth = output.data.date.hijri.month.en;

      // Make it like JSON
      const result: PrayerTimings = {
        Fajr: fajr,
        Zuhr: zuhr,
        Asr: asr,
        Magrib: magrib,
        Isha: isha,
        Sunrise: sunrise,
        Sunset: sunset,
        Englishdate: englishdate,
        Hijridate: hijridate,
        Holymonth: holymoth,
      };

      // console.log(result);

      // Return Result
      return result;


    } catch (error: any) {
      throw new Error(`Error while fetching prayer time: ${error.message}`);
      
    }
  }