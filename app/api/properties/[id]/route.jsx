import connectDB from '@/config/database';
import Property from '@/models/Property';

// GET /api/properties/:id
export const GET = async (request, { params }) => {
    try {
        await connectDB();

        // console.log(params);

        const property = await Property.findById(params.id);
        if (!property)
            return new Response('Property not found', { status: 404 });

        // return new Response(JSON.stringify(property.name), {
        //     status: 200,
        // });
        return new Response(JSON.stringify(property), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new Response('Ho Hey – Something was gone wrong', {
            status: 500,
        });
    }
};
