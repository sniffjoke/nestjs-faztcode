import {Module} from '@nestjs/common';
import {TasksModule} from './tasks/tasks.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://sniffjoke:QtPYwNuLpRgA9Ocm@cluster0.wztijw6.mongodb.net/tasksdb?retryWrites=true&w=majority'
        ),
        TasksModule
    ],
})
export class AppModule {
}
