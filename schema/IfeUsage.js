cube(`IfeUsage`, {
  sql: `SELECT * FROM public.ife_usage`,
  
  joins: {
    PassengerManifest: {
      sql: `${CUBE}.passenger_manifest_id = ${PassengerManifest}.id`,
      relationship: `belongsTo`
    },
    
    Media: {
      sql: `${CUBE}.media_id = ${Media}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    },
    UH: {
      sql: `"UH"`,
      type: `sum`,
      drillMembers: [id, Airline.name, Flight.tail, Flight.id, Flight.origin, Flight.destination, Airport.city, Flight.flightTime, Media.mediaName, Media.genres, uh, device, PassengerManifest.passengerName,PassengerManifest.gender,PassengerManifest.ageGroup,PassengerManifest.class, PassengerManifest.seatAssignment,PassengerManifest.nationality, PassengerManifest.tripPurpose]
    },
    PD: {
      sql: `"PD"`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
      shown: true
    },
    uh: {
      sql: `"UH"`,
      type: `number`,
    },
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
    ifeVideoOnDemand: {
      sql: `${Media}.ife_usage_type = 'Video on Demand'`
    },
    ifeAudioOnDemand: {
      sql: `${Media}.ife_usage_type = 'Audio on Demand'`
    },
    ifeGame: {
      sql: `${Media}.ife_usage_type = 'Game'`
    },
    ifeApplication: {
      sql: `${Media}.ife_usage_type = 'Application'`
    }
  },
  preAggregations: {
    usageUHContentTypeByMonth: {
      type: `rollup`,
      measureReferences: [UH,PD],
      dimensionReferences: [Media.ifeUsageType],
      timeDimensionReference: createdAt,
      granularity: `month`
    }
  }
});
