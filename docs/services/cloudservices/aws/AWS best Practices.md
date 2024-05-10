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

## Resource Management:

- **Tagging:** Implement a consistent tagging strategy for resources in all linked accounts. This allows for better cost allocation, resource identification, and easier filtering when managing resources across multiple accounts. Follow [How to tag resources on AWS](https://docs.ciroh.org/docs/education/CloudComputing/AWS/).

- **Cost allocation:** Allowed limit for subaccount is $500/project per month. Monitor the usage throughout the month and if it reaches above $500/project, notify admin of the subaccount to take necessary actions. For projects expecting more than $500 per month usage, please email [ciroh-it-admin@ua.edu](mailto:ciroh-it-admin@ua.edu) in advance to get the approval from higher management.

- **Resource quotas:** Set resource quotas for subaccounts to limit their spending and resource usage. This helps prevent accidental overspending and ensures efficient resource allocation.

- **Monitor resource usage:** Encourage subaccount admins to monitor their resource usage regularly to identify potential cost optimization opportunities.

- **Data Locality:** Always consider the location of your data when selecting a region for deploying resources. Deploying resources in the same region as your data minimizes data transfer costs and latency, leading to improved performance and cost-efficiency.

- **Region Selection:** Carefully evaluate the available AWS regions and select the one that best aligns with your data residency requirements, compliance needs, and desired performance characteristics.

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
