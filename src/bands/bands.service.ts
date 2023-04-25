import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Bands } from '../entities/bands.entity';

const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

function newToken() {
  spotifyApi.clientCredentialsGrant().then(
    function (data: any) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);

      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function (err: any) {
      console.log(
        'Something went wrong when retrieving an access token =',
        err.message,
      );
    },
  );
}

newToken();

//And set an interval to request a new token every hour
setInterval(newToken, 1000 * 60 * 60);

interface Band {
  name: string;
  country_of_origin: string;
  year_formed: number;
}

interface BandUpdate {
  name?: string;
  country_of_origin?: string;
  year_formed?: number;
}

// Get an image from spotify web api
const getImage = async (id: string) => {
  const data = await spotifyApi.getArtist(id).then(function (data: any) {
    return data.body.images[1].url;
  });
  return data;
};

@Injectable()
export class BandsService {
  constructor(
    @InjectRepository(Bands) private bandsRepository: Repository<Bands>,
  ) {}

  async getAllBands(): Promise<any> {
    const results = await this.bandsRepository.find();
    console.log();
    const newData = [];
    for (const el of results) {
      if (el.spotify_id == null) {
        newData.push(el);
      } else {
        newData.push({
          ...el,
          image: await getImage(el.spotify_id),
        });
      }
    }
    return newData;
  }

  async getBand(id: number): Promise<any> {
    const results = await this.bandsRepository.findOneBy({ id });
    const data = await spotifyApi.getArtist(results.spotify_id).then(
      function (data: any) {
        console.log('Artist information', data.body);
        return data.body.images;
      },
      function (err: any) {
        console.error(err);
        return 'No image';
      },
    );
    return { ...results, image: data[2].url };
  }

  addBand({ name, country_of_origin, year_formed }: Band): Promise<Bands> {
    const newBand = {
      name,
      country_of_origin,
      year_formed,
      created_at: new Date(),
      updated_at: new Date(),
    };
    try {
      this.bandsRepository.save(newBand);
    } catch (error) {
      throw new Error();
    }
    return;
  }

  editBand(
    id: number,
    { name, country_of_origin, year_formed }: BandUpdate,
  ): Promise<UpdateResult> {
    const newBand = {
      name,
      country_of_origin,
      year_formed,
      updated_at: new Date(),
    };
    return this.bandsRepository.update(id, newBand);
  }

  deleteBand(id: number): Promise<DeleteResult> {
    return this.bandsRepository.delete(id);
  }
}
