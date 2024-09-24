---
sidebar_position: 1
title: AWS Best Practices
---

# AWS Best Practices for CIROH AWS Users

As the main account administrator for CIROH subaccount, here are some best practices to follow within your subaccount:

## Security:

- **MFA:** Require Multi-Factor Authentication (MFA) for all subaccount users and admins to enhance account security.
  
- **IAM roles for resources:** Instead of individual access keys, utilize IAM roles for accessing resources within subaccounts. This simplifies access management and eliminates the need for storing long-lived credentials.
  
- **Regularly review and update permissions:** Regularly review and update user and role permissions within subaccounts to ensure they remain aligned with their current needs.

- **Utilize git-secrets**: git-secrets is a client tool that prohibits unwanted commits containing secret data such as API keys, passwords, and tokens. You can integrate it into your CI/CD pipelines to prevent sensitive information from being added to your GitHub repositories. For more information, refer to the [AWS documentation](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/scan-git-repositories-for-sensitive-information-and-security-issues-by-using-git-secrets.html) and the [git-secrets GitHub repository](https://github.com/awslabs/git-secrets).

- **Use AWS Secrets Manager**: Use AWS Secrets Manager, or other secrets management solution, so you don’t have to hardcode keys in plaintext. The application or client can then retrieve secrets when needed. For more information, see [What is AWS Secrets Manager?](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)

## Access Key Management :

- Never store your access key in plain text, in a code repository, or in code.
- Never check in the access key in the public repository.
- Disable or delete access key when no longer needed.
- Enable least-privilege permissions.
- Rotate access keys regularly, preferably every 90 days.

## Resource Management:

- **Tagging:** Implement a consistent tagging strategy for resources in all linked accounts. This allows for better cost allocation, resource identification, and easier filtering when managing resources across multiple accounts. Follow [How to tag resources on AWS](https://docs.ciroh.org/docs/services/cloudservices/aws/tagging).

- **Cost allocation**: Allowed limit for **new** subaccount is $500/project per month. Monitor the usage throughout the month and if it reaches above $500/project, notify admin of the subaccount to take necessary actions. For projects expecting more than $500 per month usage, please email ciroh-it-admin@ua.edu in advance to get the approval from higher management. **Effective Sept 2024**, we transitioned to a new budgeting model (for existing
users) that provides your CIROH AWS subaccount with a $10,000 budget for
every 6-month period and monthly max limit of $3000. This change will give
you more flexibility to plan and execute your research workloads without the
constraints of a monthly cap.

- **Resource quotas:** Set resource quotas for subaccounts to limit their spending and resource usage. This helps prevent accidental overspending and ensures efficient resource allocation.

- **Monitor resource usage:** Encourage subaccount admins to monitor their resource usage regularly to identify potential cost optimization opportunities.

- **Data Locality:** Always consider the location of your data when selecting a region for deploying resources. Deploying resources in the same region as your data minimizes data transfer costs and latency, leading to improved performance and cost-efficiency.

- **Region Selection:** Carefully evaluate the available AWS regions and select the one that best aligns with your data residency requirements, compliance needs, and desired performance characteristics.

EBS:
- **EBS Volume Management: Avoiding Unnecessary Costs:** Terminate EBS Volumes with Terminated Instances: When terminating an EC2 instance, ensure that you also delete any associated EBS volumes that are no longer needed. EBS volumes incur charges even if they are not attached to a running instance.

- **Regularly Review EBS Volume Usage:** Periodically review your EBS volumes using the EC2 Management Console or AWS CLI. Identify any unattached volumes that are no longer required and delete them to avoid ongoing charges.

EFS:
- **Data Lifecycle Management:** Evaluate your data access patterns. For infrequently accessed files, consider migrating data from Amazon EFS to Amazon S3 to leverage its cost-efficient storage classes, such as S3 Standard-IA or S3 Glacier.

- **Tiered Storage Strategy:** Implement a tiered storage strategy where frequently accessed data resides on EFS for high performance, while infrequently accessed or archival data is moved to S3 for cost-effective long-term storage.

## Governance and Compliance:

- **Standardized configurations:** Establish and enforce standardized configurations for resources across linked accounts. This ensures consistency and simplifies management.
  
- **Compliance policies:** Implement compliance policies for subaccounts to ensure they adhere to relevant regulations and internal standards.
  
- **Logging and auditing:** Enable logging and auditing for all activities within linked accounts to track resource usage, identify potential security threats, and maintain compliance.
  
- **Regular security audits:** Conduct regular security audits of linked accounts to identify and address any vulnerabilities.

## Additional Recommendations:

- **Centralized documentation:** Use CIROH DocuHub ([docs.ciroh.org](https://docs.ciroh.org)) as a central location for documenting procedures, best practices, and resource usage guidelines for linked accounts.

- **Training and awareness:** Offer training and awareness programs to subaccount admins on secure practices, compliance requirements, and resource management best practices through CIROH AWS Office hours.

- **Regular communication:** Maintain regular communication with subaccount admins to address their concerns, answer questions, and share updates regarding policies and procedures via Slack Channel and also available through CIROH AWS Office hours.

## Application Deployment:

- Use terraforms or any Infrastructure as Code if possible for your application deployment.
