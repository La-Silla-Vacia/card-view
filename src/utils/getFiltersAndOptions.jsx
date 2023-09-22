
export default function filtersAndOptions(filters, data) {

    return filters.map((filter)=>{
        let options = []
        data?.forEach((item)=>{
            if(item[filter.label] && !options.includes(item[filter.label])){
                options.push(item[filter.label])
            }
        })

        return {
            label: filter.label,
            value: "all",
            options: options
        }
    })
}