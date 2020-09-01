cube(`IfeUsage`, {
  sql: `SELECT * FROM public.ife_usage`,
  
  joins: {
    Media: {
      sql: `${CUBE}.media_id = ${Media}.id`,
      relationship: `belongsTo`
    },
    
    Aircraft: {
      sql: `${CUBE}.aircraft_id = ${Aircraft}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt]
    },
    totalUsage: {
      sql: `play_time`,
      type: `sum`
    },
    uhUsage: {
      sql: `uh`,
      type: `sum`
    },
    pdUsage: {
      sql: `pd`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    mediaId: {
      sql: `media_id`,
      type: `number`
    },
    aircraftId: {
      sql: `aircraft_id`,
      type: `number`
    },
    
    seatClass: {
      sql: `seat_class`,
      type: `string`
    },
    
    seatNumber: {
      sql: `seat_number`,
      type: `string`
    },
    
    playerGerder: {
      sql: `player_gerder`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    }
  }
});
