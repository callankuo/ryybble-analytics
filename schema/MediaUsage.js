cube(`MediaUsage`, {
  sql: `SELECT * FROM public.media_usage`,

  refreshKey: {
    sql: `SELECT MAX(created_at) FROM public.media_usage`
  },
  
  joins: {
    PassengerManifest: {
      sql: `${CUBE}.passenger_manifest_id = ${PassengerManifest}.id`,
      relationship: `belongsTo`
    },
    
    MediaRight: {
      sql: `${CUBE}.media_right_id = ${MediaRight}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      //drillMembers: [id, Airline.name, Flight.tail, Flight.id, Flight.origin, Flight.destination, Airport.city, Flight.flightTime, Media.title, Media.genres, uh, device, PassengerManifest.passengerName,PassengerManifest.gender,PassengerManifest.ageGroup,PassengerManifest.class, PassengerManifest.seatAssignment,PassengerManifest.nationality, PassengerManifest.tripPurpose]
    }, /* hide for Poc
    UH: {
      sql: `"UH"`,
      type: `sum`,
      drillMembers: [id, Airline.name, Flight.tail, Flight.id, Flight.origin, Flight.destination, Airport.city, Flight.flightTime, Media.mediaName, Media.genres, uh, device, PassengerManifest.passengerName,PassengerManifest.gender,PassengerManifest.ageGroup,PassengerManifest.class, PassengerManifest.seatAssignment,PassengerManifest.nationality, PassengerManifest.tripPurpose]
      //drillMembers: [id, Media.genres, uh, device, PassengerManifest.passengerName,PassengerManifest.gender,PassengerManifest.ageGroup,PassengerManifest.class, PassengerManifest.seatAssignment,PassengerManifest.nationality, PassengerManifest.tripPurpose]
    },
    PD: {
      sql: `"PD"`,
      type: `sum`
    } */
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
      //shown: true
    }, 
    /*
    uh: {
      sql: `"UH"`,
      type: `number`,
    }, */
    device: {
      sql: `device`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    }
  },
  segments: {
    /* hide for PoC
    ifeVideoOnDemand: {
      sql: `${Media}.usage_type = 'Video on Demand'`
    },
    ifeAudioOnDemand: {
      sql: `${Media}.usage_type = 'Audio on Demand'`
    },
    ifeGame: {
      sql: `${Media}.usage_type = 'Game'`
    },
    ifeApplication: {
      sql: `${Media}.usage_type = 'Application'`
    } */
  },
  preAggregations: {
    usageUHContentTypeByMonth: {
      type: `rollup`,
      measureReferences: [count],
      dimensionReferences: [Media.contentType],
      timeDimensionReference: createdAt,
      granularity: `year`
    }
  }
});