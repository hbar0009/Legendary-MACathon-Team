/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/EVENT": {
    get: {
      parameters: {
        query: {
          event_id?: parameters["rowFilter.EVENT.event_id"];
          event_name?: parameters["rowFilter.EVENT.event_name"];
          event_desc?: parameters["rowFilter.EVENT.event_desc"];
          event_start_datetime?: parameters["rowFilter.EVENT.event_start_datetime"];
          event_end_datetime?: parameters["rowFilter.EVENT.event_end_datetime"];
          et_id?: parameters["rowFilter.EVENT.et_id"];
          event_host?: parameters["rowFilter.EVENT.event_host"];
          event_created_at?: parameters["rowFilter.EVENT.event_created_at"];
          event_address?: parameters["rowFilter.EVENT.event_address"];
          event_postcode?: parameters["rowFilter.EVENT.event_postcode"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["EVENT"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** EVENT */
          EVENT?: definitions["EVENT"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          event_id?: parameters["rowFilter.EVENT.event_id"];
          event_name?: parameters["rowFilter.EVENT.event_name"];
          event_desc?: parameters["rowFilter.EVENT.event_desc"];
          event_start_datetime?: parameters["rowFilter.EVENT.event_start_datetime"];
          event_end_datetime?: parameters["rowFilter.EVENT.event_end_datetime"];
          et_id?: parameters["rowFilter.EVENT.et_id"];
          event_host?: parameters["rowFilter.EVENT.event_host"];
          event_created_at?: parameters["rowFilter.EVENT.event_created_at"];
          event_address?: parameters["rowFilter.EVENT.event_address"];
          event_postcode?: parameters["rowFilter.EVENT.event_postcode"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          event_id?: parameters["rowFilter.EVENT.event_id"];
          event_name?: parameters["rowFilter.EVENT.event_name"];
          event_desc?: parameters["rowFilter.EVENT.event_desc"];
          event_start_datetime?: parameters["rowFilter.EVENT.event_start_datetime"];
          event_end_datetime?: parameters["rowFilter.EVENT.event_end_datetime"];
          et_id?: parameters["rowFilter.EVENT.et_id"];
          event_host?: parameters["rowFilter.EVENT.event_host"];
          event_created_at?: parameters["rowFilter.EVENT.event_created_at"];
          event_address?: parameters["rowFilter.EVENT.event_address"];
          event_postcode?: parameters["rowFilter.EVENT.event_postcode"];
        };
        body: {
          /** EVENT */
          EVENT?: definitions["EVENT"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/EVENT_TYPE": {
    get: {
      parameters: {
        query: {
          et_id?: parameters["rowFilter.EVENT_TYPE.et_id"];
          et_name?: parameters["rowFilter.EVENT_TYPE.et_name"];
          et_created_at?: parameters["rowFilter.EVENT_TYPE.et_created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["EVENT_TYPE"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** EVENT_TYPE */
          EVENT_TYPE?: definitions["EVENT_TYPE"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          et_id?: parameters["rowFilter.EVENT_TYPE.et_id"];
          et_name?: parameters["rowFilter.EVENT_TYPE.et_name"];
          et_created_at?: parameters["rowFilter.EVENT_TYPE.et_created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          et_id?: parameters["rowFilter.EVENT_TYPE.et_id"];
          et_name?: parameters["rowFilter.EVENT_TYPE.et_name"];
          et_created_at?: parameters["rowFilter.EVENT_TYPE.et_created_at"];
        };
        body: {
          /** EVENT_TYPE */
          EVENT_TYPE?: definitions["EVENT_TYPE"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/PARTICIPANT": {
    get: {
      parameters: {
        query: {
          part_id?: parameters["rowFilter.PARTICIPANT.part_id"];
          part_fname?: parameters["rowFilter.PARTICIPANT.part_fname"];
          part_email?: parameters["rowFilter.PARTICIPANT.part_email"];
          part_created_at?: parameters["rowFilter.PARTICIPANT.part_created_at"];
          part_lname?: parameters["rowFilter.PARTICIPANT.part_lname"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["PARTICIPANT"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** PARTICIPANT */
          PARTICIPANT?: definitions["PARTICIPANT"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          part_id?: parameters["rowFilter.PARTICIPANT.part_id"];
          part_fname?: parameters["rowFilter.PARTICIPANT.part_fname"];
          part_email?: parameters["rowFilter.PARTICIPANT.part_email"];
          part_created_at?: parameters["rowFilter.PARTICIPANT.part_created_at"];
          part_lname?: parameters["rowFilter.PARTICIPANT.part_lname"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          part_id?: parameters["rowFilter.PARTICIPANT.part_id"];
          part_fname?: parameters["rowFilter.PARTICIPANT.part_fname"];
          part_email?: parameters["rowFilter.PARTICIPANT.part_email"];
          part_created_at?: parameters["rowFilter.PARTICIPANT.part_created_at"];
          part_lname?: parameters["rowFilter.PARTICIPANT.part_lname"];
        };
        body: {
          /** PARTICIPANT */
          PARTICIPANT?: definitions["PARTICIPANT"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/PARTICIPANT_EVENT": {
    get: {
      parameters: {
        query: {
          part_id?: parameters["rowFilter.PARTICIPANT_EVENT.part_id"];
          event_id?: parameters["rowFilter.PARTICIPANT_EVENT.event_id"];
          pe_created_at?: parameters["rowFilter.PARTICIPANT_EVENT.pe_created_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["PARTICIPANT_EVENT"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** PARTICIPANT_EVENT */
          PARTICIPANT_EVENT?: definitions["PARTICIPANT_EVENT"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          part_id?: parameters["rowFilter.PARTICIPANT_EVENT.part_id"];
          event_id?: parameters["rowFilter.PARTICIPANT_EVENT.event_id"];
          pe_created_at?: parameters["rowFilter.PARTICIPANT_EVENT.pe_created_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          part_id?: parameters["rowFilter.PARTICIPANT_EVENT.part_id"];
          event_id?: parameters["rowFilter.PARTICIPANT_EVENT.event_id"];
          pe_created_at?: parameters["rowFilter.PARTICIPANT_EVENT.pe_created_at"];
        };
        body: {
          /** PARTICIPANT_EVENT */
          PARTICIPANT_EVENT?: definitions["PARTICIPANT_EVENT"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  /** @description An event. community service activity, etc */
  EVENT: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    event_id: number;
    /** Format: character varying */
    event_name: string;
    /** Format: character varying */
    event_desc: string;
    /** Format: timestamp with time zone */
    event_start_datetime: string;
    /** Format: timestamp with time zone */
    event_end_datetime: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `EVENT_TYPE.et_id`.<fk table='EVENT_TYPE' column='et_id'/>
     */
    et_id: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `PARTICIPANT.part_id`.<fk table='PARTICIPANT' column='part_id'/>
     */
    event_host: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    event_created_at?: string;
    /** Format: character varying */
    event_address: string;
    /** Format: character varying */
    event_postcode: string;
  };
  /** @description Event type categories */
  EVENT_TYPE: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    et_id: number;
    /** Format: character varying */
    et_name: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    et_created_at?: string;
  };
  /** @description General user of the system, participates in events */
  PARTICIPANT: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    part_id: number;
    /** Format: character varying */
    part_fname: string;
    /** Format: character varying */
    part_email: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    part_created_at?: string;
    /** Format: character varying */
    part_lname: string;
  };
  /** @description A record of a participant attending an event */
  PARTICIPANT_EVENT: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `PARTICIPANT.part_id`.<fk table='PARTICIPANT' column='part_id'/>
     */
    part_id: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     * This is a Foreign Key to `EVENT.event_id`.<fk table='EVENT' column='event_id'/>
     */
    event_id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    pe_created_at?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description EVENT */
  "body.EVENT": definitions["EVENT"];
  /** Format: bigint */
  "rowFilter.EVENT.event_id": string;
  /** Format: character varying */
  "rowFilter.EVENT.event_name": string;
  /** Format: character varying */
  "rowFilter.EVENT.event_desc": string;
  /** Format: timestamp with time zone */
  "rowFilter.EVENT.event_start_datetime": string;
  /** Format: timestamp with time zone */
  "rowFilter.EVENT.event_end_datetime": string;
  /** Format: bigint */
  "rowFilter.EVENT.et_id": string;
  /** Format: bigint */
  "rowFilter.EVENT.event_host": string;
  /** Format: timestamp with time zone */
  "rowFilter.EVENT.event_created_at": string;
  /** Format: character varying */
  "rowFilter.EVENT.event_address": string;
  /** Format: character varying */
  "rowFilter.EVENT.event_postcode": string;
  /** @description EVENT_TYPE */
  "body.EVENT_TYPE": definitions["EVENT_TYPE"];
  /** Format: bigint */
  "rowFilter.EVENT_TYPE.et_id": string;
  /** Format: character varying */
  "rowFilter.EVENT_TYPE.et_name": string;
  /** Format: timestamp with time zone */
  "rowFilter.EVENT_TYPE.et_created_at": string;
  /** @description PARTICIPANT */
  "body.PARTICIPANT": definitions["PARTICIPANT"];
  /** Format: bigint */
  "rowFilter.PARTICIPANT.part_id": string;
  /** Format: character varying */
  "rowFilter.PARTICIPANT.part_fname": string;
  /** Format: character varying */
  "rowFilter.PARTICIPANT.part_email": string;
  /** Format: timestamp with time zone */
  "rowFilter.PARTICIPANT.part_created_at": string;
  /** Format: character varying */
  "rowFilter.PARTICIPANT.part_lname": string;
  /** @description PARTICIPANT_EVENT */
  "body.PARTICIPANT_EVENT": definitions["PARTICIPANT_EVENT"];
  /** Format: bigint */
  "rowFilter.PARTICIPANT_EVENT.part_id": string;
  /** Format: bigint */
  "rowFilter.PARTICIPANT_EVENT.event_id": string;
  /** Format: timestamp with time zone */
  "rowFilter.PARTICIPANT_EVENT.pe_created_at": string;
}

export interface operations {}

export interface external {}
