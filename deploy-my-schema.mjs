#!/usr/bin/env node --experimental-json-modules
// @ts-check

import { session, ActualWorkspace, ClassSpec, Property } from 'frusal';
// @ts-ignore
import frusalJson from './frusal.json';

const COMMON_DESCRIPTION = 'Created and maintained by deploy-my-schema.js';

async function main() {
    try {
        if (!session.user) {
            console.warn('Please use `npx frusal login` to login to frusal.com workspace.');
    
        } else {
            console.log(`Connecting to workspace "${frusalJson.workspace}"...`);
            await session.login({ workspace: frusalJson.workspace });
    
            if (!session.workspace) {
                console.warn('Please use `npx frusal login` to select a workspace.');
    
            } else {
                await session.workspace.withTempStageAsyncExpression(stage => {
                    const actualWorkspace = stage.transact(tx => tx.getSingletonInstance(ActualWorkspace));
                    const module = actualWorkspace.modules.find(m => !m.system);
                    console.log(`Creating classes at module "${module.name}"...`);
            
                    stage.transact(tx => {
                        // Delete old classes
                        [...module.classes].filter(c => c.description === COMMON_DESCRIPTION).forEach(c => c.delete());
            
                        // Create new ones
                        const stringType = actualWorkspace.modules.get(0).types.find(t => t.name === 'String');
                        const bookClass = tx.createEntity(ClassSpec);
                        bookClass.name = 'Book';
                        bookClass.description = COMMON_DESCRIPTION;
                        const bookNameProp = tx.createEntity(Property);
                        bookNameProp.name = 'Title';
                        bookNameProp.description = 'The title of the book.';
                        bookNameProp.type = stringType;
                        bookNameProp.classSpec = bookClass; // this is an inverse property to class.fields, which means this action would add it to that collection.
                        bookClass.module = module; // an inverse to module.classes collection.
                    });
            
                });
                console.log('Schema changes deployed.');
            }
        }
    } finally {
        session.close();
    }
}

main();
