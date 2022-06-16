const mockData = {
    "rate_definitions": {
        "area": "area",
        "operating_rate": "t/h",
        "design_rate": "t/h",
        "meinimum_rate": "t/h"
    },
    "control_points": {
        "area": "area",
        "buffer": "buffer",
        "control_points": [
            {
                "%_total_level": "integer",
                "%_total_max_capacity": "integer"
            }
        ]
    },
    "Unplanned_maintenance": {
        "Resource": "resource",
        "Event_name": "delay_type",
        "MTTRT": 
            {
                "MTTF distribution": "string",
                "MTTF mean": "float",
                "TTF_scale_factor": "float"
            } 
    }
}

export const mockDataWithValues = {
    "rate_definitions": {
        "area": "Perth",
        "operating_rate": 500,
        "design_rate": 200,
        "meinimum_rate": 300
    },
    "control_points": {
        "area": "Visagio",
        "buffer": "buffer",
        "control_points": [
            {
                "%_total_level": 123   ,
                "%_total_max_capacity": 321
            },
            {
                "%_total_level": 567   ,
                "%_total_max_capacity": 987
            },
        ]
    },
    "Unplanned_maintenance": {
        "Resource": "My Resource",
        "Event_name": "This Event",
        "MTTRT": 
            {
                "MTTF distribution": "Mock Distribution Name",
                "MTTF mean": 0.4,
                "TTF_scale_factor": 0.4
            } 
    }
}
export default mockData;
