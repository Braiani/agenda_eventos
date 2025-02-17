const ingressosTable = (tickets) => {
    let rows = '';

    tickets.forEach(ticket => {
        rows += `<tr class="border-b border-gray-200">
                    <th scope="row" class="py-4 text-center">
                        ${ticket.id}
                    </th>
                    <td class="py-4 text-center">
                        ${ticket.status}
                    </td>
                    <td class="py-4 text-center">
                        <i id="view_1" class="fa fa-eye px-3"></i>
                    </td>
                </tr>`
    });

    return `
        <div class="container">
            <div class="">
                <table class="w-full text-sm text-left text-blue-500 ">
                    <thead class="text-xs text-blue-700 uppercase">
                        <tr class="border-b">
                            <th scope="col" class="py-3 text-center">
                                #Cod
                            </th>
                            <th scope="col" class="py-3 text-center">
                                Status
                            </th>
                            <th scope="col" class="py-3">
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>

            </div>
        </div>`;
}

export default ingressosTable;