import {CloudFrontClient, GetDistributionConfigCommand, UpdateDistributionCommand} from '@aws-sdk/client-cloudfront';

export const handler = async (): Promise<void> => {
    const cloudfront = new CloudFrontClient({region: 'us-east-1'});
    const distributionId = process.env.CLOUDFRONT_DISTRIBUTION_ID;

    try {
        const getDistConfig = new GetDistributionConfigCommand({Id: distributionId});
        const {DistributionConfig, ETag} = await cloudfront.send(getDistConfig);

        // Disable the CloudFront distribution
        DistributionConfig!.Enabled = false;

        const updateDistConfig = new UpdateDistributionCommand({
            Id     : distributionId,
            DistributionConfig,
            IfMatch: ETag,
        });
        const updateResp = await cloudfront.send(updateDistConfig);

        console.log(`update response ${updateResp.$metadata.httpStatusCode}`);
        console.log(`CloudFront distribution ${distributionId} has been disabled.`);
    } catch (e) {
        console.error(`Failed to disable CloudFront distribution: ${e}`);
        throw e;
    }
};
